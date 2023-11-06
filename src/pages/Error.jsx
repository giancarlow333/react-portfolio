import { useRouteError } from 'react-router-dom';
import '../App.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
      <h1 className='section-header'>OOPS!</h1>
      <div className='section-contents'>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </main>
  );
}
