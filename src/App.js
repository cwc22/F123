import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <div>
      <h1>Notes App</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
