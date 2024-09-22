import { createRoot } from 'react-dom/client';

import { RootComponent } from './RootComponent';

import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'remixicon/fonts/remixicon.css';

import './@styles/main.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
	createRoot(rootElement).render(<RootComponent />);
}
