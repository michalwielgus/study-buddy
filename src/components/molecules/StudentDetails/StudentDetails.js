import React from 'react';
import { ItemMeta } from 'components/atoms/ItemMeta/ItemMeta';
import { Title } from 'components/atoms/Title/Title';
import { Average } from 'components/atoms/Average/Average';
import {
  Summary,
  Details,
  SectionTitle,
  CourseName,
  GradeList,
  GradeItem,
  Subject,
} from './StudentDetails.styles';

const StudentDetails = ({ student }) => {
  return (
    <>
      {student ? (
        <>
          <Summary>
            <Average average={student.average} isBig={true}>
              {student.average}
            </Average>
            <Title as="h2">{student.name}</Title>
            <div>
              <ItemMeta style={{ fontWeight: 'bold' }}>
                Group {student.group}
              </ItemMeta>
              <ItemMeta>attendance: {student.attendance}%</ItemMeta>
            </div>
          </Summary>
          <Details>
            <SectionTitle>Course:</SectionTitle>
            <CourseName>{student.course}</CourseName>

            <SectionTitle>Average grades:</SectionTitle>
            <GradeList>
              {student.subjects.map((subject) => (
                <GradeItem key={subject.name}>
                  <Subject>{subject.name}</Subject>
                  <Average average={subject.grade}>{subject.grade}</Average>
                </GradeItem>
              ))}
            </GradeList>
          </Details>
        </>
      ) : (
        'Student not found.'
      )}
    </>
  );
};

export default StudentDetails;
