// import Error from '../components/Error/Error'
// import React from 'react';

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { hasError: false };
//     }
  
//     static getDerivedStateFromError(error) {
//       // Update state so the next render will show the fallback UI.
//       return { hasError: true };
//     }
  
//     render() {
//       if (this.state.hasError) {
//         <Error/>
//         return this.props.Error;
//       }
  
//       return this.props.children;
//     }
//   }

//   export default ErrorBoundary;