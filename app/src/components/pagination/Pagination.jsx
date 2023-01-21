import {Pagination} from "@mui/material";
import './Pagination.scss'

export default function PaginationItem({count}) {
	return (
		<Pagination  count={count} className='pagination'  />
	);
}
