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

    </div>
  );
}

export default App;
