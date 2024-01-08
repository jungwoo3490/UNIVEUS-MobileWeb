import ModalTest from '../components/ModalTest';
import Button from '../components/Button';
import CreateDetail from './CreateDetail';
import CreateIntro from './CreateIntro';
import MyFeed from './MyFeed';
import Modal from '../components/Modal';
import { useState } from 'react';
import { MainHeader, SubHeader } from '../components/Header';
import NavBar from '../components/NavBar';

export default function Test() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	return (
		<div>
			{/* <MainHeader /> */}
			<SubHeader headertext={'상세정보 입력'} textBtn={'완료'} />
			<div style={{ marginTop: '60px' }}>
				<button onClick={openModal}>Open Modal</button>
				<Button onClick={openModal} content={'승인하기'} />
			</div>
			<NavBar present={'home'} />
			{/* <ModalTest />
			<Button type={'floating'} content={'스터디'} /> */}
			{/* <CreateDetail /> */}
			{/* <CreateIntro /> */}
			{/* <MyFeed /> */}
			{/* <Modal isOpen={isModalOpen} title={'gd'}>
				<h1>안녕?</h1>
				<p>안녕하세요</p>
			</Modal> */}
		</div>
	);
}
