import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';

export default function Share() {
	return ( 
		<div className="share">
			<div className="shareWrapper">
				<div classname="shareTop">
					<img className="shareProfileImg" src="/Assets/person/homme.jpeg" alt=""/>
					<input placeholder="Partagez vos pensees ..." className="shareInput"/>
				</div>
				<hr className="shareHr"/>
				<div classname="shareBottom">
					<div className="shareOptions">
						<div className="shareOption">
							<PermMediaIcon className="shareIcon"/>
							<span className="shareOptionText"> Photo ou Video</span>
						</div>
					</div>
				</div>
			</div>
			
		</div>	
	)
}