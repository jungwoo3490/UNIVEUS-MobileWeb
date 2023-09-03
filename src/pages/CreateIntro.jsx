import './CreateIntro.scss';
import Button from '../components/Button';
import { SubHeader } from '../components/Header';
import NavBar from '../components/NavBar';
import DeleteBtn from '../assets/images/delete.svg';
import PlusBtn from '../assets/images/plus.svg';
import axios from 'axios';
import { useState, useSelector } from 'react';

export default function CreateIntro() {
	// const jwtToken = useSelector((state) => state.jwtToken);

	// const handlePosting = () => {
	// 	axios({
	// 		headers: {
	// 			'x-access-token': jwtToken,
	// 		},
	// 		method: 'post',
	// 		url: 'https://univeus.site/post',
	// 		data: {
	// 			category: 4,
	// 			limit_people: 6,
	// 			limit_gender: 0,
	// 			location: 'new',
	// 			meeting_date: '1111-01-22 00:00:12',
	// 			openchat: 'new',
	// 			end_date: '1111-01-22 00:00:12',
	// 			title: 'new',
	// 			content: 'new',
	// 		},
	// 	}).then((res) => {
	// 		console.log(res);
	// 		console.log(jwtToken);
	// 	});
	// };
	return (
		<div className="create-intro">
			<SubHeader headertext={'유니버스 생성'} />
			<div className="ci-body">
				<div className="ci-page">
					<div className="page-tap">
						<span style={{ color: 'var(--light-gray-color)' }}>1. 상세 정보 입력</span>
						<div className="page-hr" style={{ backgroundColor: 'var(--light-gray-color)' }}></div>
					</div>
					<div className="page-tap">
						<span>2. 소개글 글쓰기</span>
						<div className="page-hr"></div>
					</div>
				</div>
				<div className="ci-title">
					<div className="ct-title">제목</div>
					<input
						type="text"
						className="ct-input"
						maxLength="48"
						placeholder="센스있는 제목으로 이목을 끌어보아요 :)"
						required
					/>
				</div>
				<div className="ci-img-upload">
					<div className="ciu-title">이미지</div>
					{/* 이미지들을 배열로 담아서 배열[0], 배열[1] 로 출력하기 */}
					<div className="ciu-img-group">
						<div className="ciu-img rep">
							{/* 업로드된 이미지가 있는가 ? 업로드된 이미지가 있다면 이미지와 삭제 버튼 추가 : 없다면 삭제버튼 안보이게, 플러스 버튼(디폴트)  */}
							<img className="ciu-del" src={DeleteBtn} alt="삭제 버튼" />
							<img src="https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg" alt="이미지1" />
						</div>
						<div className="ciu-img">
							<img src={PlusBtn} alt="이미지 추가하기" />
						</div>
						<div className="ciu-img">
							<img src="" alt="이미지3" />
						</div>
						<div className="ciu-img">
							<img src="" alt="이미지4" />
						</div>
					</div>
				</div>
				<div className="ci-content">
					<div className="cct-title">소개글 작성</div>
					<textarea
						className="cct-textarea"
						maxLength="500"
						required
						placeholder="어떤 모임을 진행할 예정인가요? 간단하게 작성해 보아요 :) &#13;&#10; &#13;&#10;
            EX)&#13;&#10;
            - 모임 주제 (바른 프로젝트 팀원을 구합니다.)&#13;&#10;
            - 원하는 분위기나, 성격&#13;&#10;
            - 원하는 과, 단과대&#13;&#10;
            - 자신의 경험 사항(프로젝트, 공모전, 대외활동 등)&#13;&#10;
            - 모임의 목표&#13;&#10;"
					></textarea>
				</div>
				{/* {meetingDate !== '' &&
				meetingTime !== '' &&
				endDate !== '' &&
				endTime !== '' &&
				location !== '' &&
				opendChat !== '' ? (
					<Button type={'floating'} content={'다음'} onClick={handleClickNextPage} />
				) : (
					<Button type={'floating disabled'} content={'미입력 된 항목이 있습니다'} />
				)} */}
			</div>
			<NavBar />
		</div>
	);
}
