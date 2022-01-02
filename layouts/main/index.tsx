import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@layout/footer';
import Header from '@layout/header';

type LayoutProps = {
  meta?: ReactNode;
  children?: ReactNode;
};

const Main = (props: LayoutProps) => (
  <div className="bg-black">
    <ToastContainer
      draggable
      toastClassName="m-4 min-h-10 rounded-lg"
      bodyClassName="w-full my-auto text-sm block p-3"
    />
    <Header />
    <div className="layout-container">{props.children}</div>
    <Footer />
  </div>
);

export default Main;
