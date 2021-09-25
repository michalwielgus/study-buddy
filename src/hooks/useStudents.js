import { useCallback } from 'react';
import axios from 'axios';

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const result = await axios.get('/groups');
      return result.data.groups;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await axios.get(
        `/groups/${groupId ? `${groupId}` : 'all'}`
      );
      return result.data.students;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getStudentById = useCallback(async (studentId) => {
    try {
      const result = await axios.get(`/students/${studentId}`);

      return result.data.students;
    } catch (err) {
      console.log(err);
    }
  }, []);

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

  return { getStudentsByGroup, getStudentById, getGroups, findStudents };
};
