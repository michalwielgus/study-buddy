import { useEffect, useState } from 'react';
import axios from 'axios';

export const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get('/groups');
        setGroups(result.data.groups);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
          `/students${groupId ? `/${groupId}` : ''}`
        );
        setStudents(result.data.students);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [groupId]);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return { students, groups, findStudents };
};
