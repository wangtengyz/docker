/*
 * @Descripttion:
 * @Author: voanit
 * @Date: 2022-08-31 11:28:19
 * @LastEditors: voanit
 * @LastEditTime: 2022-10-10 19:11:44
 */
import React, { useState } from "react";
import { Button } from "antd";
import classname from 'classnames';
import home from './index.module.scss';

const Home = () => {
	const [visible, setVisible] = useState<boolean>(true);
	return (
		<div className={ classname(home.homeContainer) }>
			<div className={ classname('r-pt-16 r-pb-20 r-pr-20 r-pl-20 r-bg-white') }>
				首页demo-测试3
			</div>
		</div>
	);
};


export default Home;
