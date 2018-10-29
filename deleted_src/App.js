/* jshint esversion: 6 */ 
import React from 'react';
import {Button,List} from 'antd-mobile';
//import 'antd-mobile/dist/antd-mobile.css';

class App extends React.Component{
  render(){
    const boss = '李云龙';

   // return <h2>独立团,团长是{boss}</h2>
   return (
    <div>
     <h2>独立团,团长是{boss}</h2>
     <Yiying laoda = '张大彪111'></Yiying>
     <Qibinglian laoda = '孙德胜'></Qibinglian>
    </div>
    )
  }
}

function Qibinglian(props){
  return <h2>骑兵连,连长是{props.laoda}</h2>
}


class Yiying extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      soldiers:['张三','李四','王五']
    }
   // this.addSoldier = this.addSoldier.bind(this);
  }


  componentWillMount(){
    console.log('组件将要被加载!')
  }
  componentDidMount(){
    console.log('组件加载完毕')
  }

  addSoldier(){
    console.log('hello new soldier');
    this.setState({
      soldiers:[...this.state.soldiers,'新兵蛋子'+Math.random()]
    })
  }

  render(){
    console.log('组件正在被加载!!!!')
    const boss = '张大彪';
    return(
    <div>
        <h3>一营,营长是{this.props.laoda}</h3>
        <Button type='primary' onClick = {()=>this.addSoldier()}>新兵入伍</Button>
        <List 
        renderHeader={()=>'士兵列表'}
        >
        {this.state.soldiers.map(v=>{
          return <List.Item key = {v}> 
            {v}
          </List.Item>
        })}
        </List>


       {/* <ul>
        {this.state.soldiers.map(v=>{
          return <li key = {v}>{v}</li>
        })}
        </ul>*/}

    </div>
    ) 
  }
}

export default App;