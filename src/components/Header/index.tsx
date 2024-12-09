import logo from '../../assets/logo.png'

interface HeaderProps {
  pageTitle: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  return (
    <header
      className="w-full h-[4.5rem] flex items-center justify-center bg-gradient-to-r from-[#03C1F3] to-[#1369A1] p-4 fixed top-0 left-0"
      data-testid="header-component"
    >
      <div className="w-[1080px] h-full flex justify-start items-center">
        <img src={logo} alt="logo-ag-sistemas" className='w-[8rem] md:w-[10rem] mr-4' />
        <span
          className="text-lg md:text-xl text-white"
          data-testid="header-page-title"
        >
         | {pageTitle}
        </span>
      </div>
    </header>
  );
};

export default Header;
