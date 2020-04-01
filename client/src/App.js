import React, { Component } from 'react';
import Question from './components/Question.js';
import Answer from './components/Answer.js';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Customer from './components/Customer.js'


const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

class Sad extends Component{

  state = {
    customers: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => {
              return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            }) : ''}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}


class Intro extends Component {
  render() {
    return (
      <div>
        <h1>안녕하세요. 찾아주셔서 감사합니다!</h1>
        <h3>그리 대단치 않지만 간혹 귀여운 양준렬이에요.</h3>
        <h5>출생년도: 1996년</h5>
        <h5>현직 취준생+방통대 컴퓨터과학과 학생</h5>
        <h5>취미 사이클, 수영, 뮤지컬 음악</h5>
      </div>
    )
  }
  
}







function App() {




  return (
    <div className="App">

      <Intro></Intro>
      <Table>
        <TableRow>
          <TableCell>
            <Question />
          </TableCell>

          <TableCell>
            <Answer />
          </TableCell>
        </TableRow>
      </Table>

      <Sad/>

    </div>
  );
}

export default withStyles(styles)(App);

