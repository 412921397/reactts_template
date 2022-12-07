import React from 'react';

interface IProps {
  name: string;
  age?: number;
}

interface IState {
  name: string;
  age: number;
  height?: number;
}

class About extends React.PureComponent<IProps, IState> {
  state = {
    name: 'about',
    age: 8
  };

  render(): React.ReactNode {
    return (
      <div>
        <div>
          内部：{this.state.name} - {this.state.age}
        </div>
        <div>
          传入：{this.props.name} - {this.props.age}
        </div>
      </div>
    );
  }
}

export default About;
