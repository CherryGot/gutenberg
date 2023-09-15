/**
 * External dependencies
 */
import {
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table';

/**
 * WordPress dependencies
 */
import { CheckboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */

import DataTableContext from './context';

// type DataTableProps = {
// 	data: any,
// 	columns: any,
// 	options: any,
// 	children: any,
// };

export default function DataTable( { data, columns, options = {}, children } ) {
	let _columns = columns;
	if ( options.enableRowSelection ) {
		_columns = [
			{
				id: 'select',
				header: ( { table } ) => {
					const areAllRowsSelected = table.getIsAllPageRowsSelected();
					const canMultiSelect = table
						.getRowModel()
						.rows.some( ( row ) => row.getCanSelect() );
					return (
						canMultiSelect && (
							<CheckboxControl
								checked={ areAllRowsSelected }
								indeterminate={
									! areAllRowsSelected &&
									table.getIsSomeRowsSelected()
								}
								onChange={ ( value ) =>
									table.toggleAllPageRowsSelected( !! value )
								}
								aria-label={ __( 'Select all' ) }
								__nextHasNoMarginBottom
							/>
						)
					);
				},
				cell: ( { row } ) =>
					row.getCanSelect() && (
						<CheckboxControl
							checked={ row.getIsSelected() }
							onChange={ ( value ) =>
								row.toggleSelected( !! value )
							}
							aria-label={ __( 'Select row' ) }
							__nextHasNoMarginBottom
						/>
					),
				enableSorting: false,
				enableHiding: false,
			},
			...columns,
		];
	}
	const table = useReactTable( {
		data,
		columns: _columns,
		...options,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	} );
	return (
		<DataTableContext.Provider value={ { ...table } }>
			{ children }
		</DataTableContext.Provider>
	);
}