import AppsIcon from "@mui/icons-material/Apps";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Selection({books}) {
	const [sort, getSort] = useState([]);
	// const books = useSelector((state) => state.topic.topic);

  const handleClick = (e)=>{
    books?.sort((a, b) => {
      return a - b;
      
    });
    console.log(books)
  }


	return (
		<div className="selection">
			<div className="selection__container">
				<button className="selection__item" onClick={handleClick}>
					<AppsIcon />
          {/* {books.length && console.log(sort)} */}
				</button>
				<button className="selection__item">
					<ViewHeadlineIcon />
				</button>
			</div>
		</div>
	);
}
