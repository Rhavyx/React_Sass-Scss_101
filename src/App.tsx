import React, { Props } from 'react';
import Loading from './components/loading';
import SassTricks from './components/sassTricks';
import './styles/App.scss';
import './styles/svg/svg.scss';

interface AppInterface {
  loading: boolean;
  count: number;
}

class App extends React.Component {

  state: AppInterface = {
    loading: true,
    count: 0
  }

  componentDidMount() {
    this.setState({ count: 1 })
  }

  componentDidUpdate() {
    if (this.state.loading === true) {
      if (this.state.count < 100) {
        setTimeout(() => {
          this.setState({ count: this.state.count += 1 })
        }, 10);
      } else {
        this.setState({ loading: false });
      }
    }
  }

  contentLogic() {
    if (this.state.loading) {
      return (
        <Loading count={this.state.count} />
      )
    } else {
      return (
        <SassTricks />
      );
    }
  }

  render() {
    return (
      <>
        {this.contentLogic()}
      </>
    )
  }
}

export default App;
/*
function App() {

  const [loading, setLoading] = React.useState(true);
  const [count, setCount] = React.useState(0);

  const contentLogic = () => {
    if (loading) {
      return (
        <div className="loading">
          <div className="circle">
            <svg className="circle__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle className="circle__svg-circle" cx="50" cy="50" r="45" />
            </svg>
            <div className="text">
              <p className="counter">{count}</p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <div className="header">
            <div className="headerItem">
              this is the header item 1
            </div>
            <div className="headerItem">
              this is the header item 2
            </div>
            <div className="headerItem">
              this is the header item 3
            </div>
          </div>
          <div className="parent">
            <div className="child1">
              child element 1
            </div>
            <div className="child2">
              child element 2
            </div>
            <div className="child3">
              child element 3
            </div>
          </div>
          <div className="main-body">
            Media Query
          </div>
        </div>
      );
    }
  }

  return (
    <>
      {contentLogic()}
    </>
  );

} */