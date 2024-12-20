import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const LoginStatus = ({ setLoginOpen }) => {
  const user = useSelector((state) => state.user.user);

  const notCurrentPage =
    'border border-transparent rounded-lg duration-100' +
    'hover:border-slate-400 focus:border-slate-400';
  const currentPage =
    'border fill-current text-white bg-black rounded-lg' +
    'duration-100 hover:border-slate-400 focus:border-slate-400';

  return (
    <>
      {user?.email ? (
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? currentPage : notCurrentPage)}
        >
          <div className="flex items-center">
            <svg
              className="w-10 h-10 stroke-current"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 29V27C28 25.9391 27.5786 24.9217 26.8284 24.1716C26.0783
                23.4214 25.0609 23 24 23H16C14.9391 23 13.9217 23.4214 13.1716
                24.1716C12.4214 24.9217 12 25.9391 12 27V29"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20
                11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {user?.first_name ? <span className="mr-2">{user?.first_name}</span> : null}
          </div>
        </NavLink>
      ) : (
        <NavLink to="#" onClick={() => setLoginOpen(true)} className={notCurrentPage}>
          <svg
            className="w-10 h-10 stroke-current"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 29V27C28 25.9391 27.5786 24.9217 26.8284 24.1716C26.0783
              23.4214 25.0609 23 24 23H16C14.9391 23 13.9217 23.4214 13.1716
              24.1716C12.4214 24.9217 12 25.9391 12 27V29"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20
              11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
      )}
    </>
  );
};

export default LoginStatus;
