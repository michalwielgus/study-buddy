import { useCallback } from 'react';
import axios from 'axios';
import { useError } from 'hooks/useError';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const useStudents = () => {
  const { dispatchError } = useError();
  const getGroups = useCallback(async () => {
    try {
      const result = await studentsAPI.get('/groups');
      return result.data.groups;
    } catch (err) {
      dispatchError(
        'There is a problem, with connection to our service. Please report a problem.'
      );
    }
  }, [dispatchError]);

  const getStudentsByGroup = useCallback(
    async (groupId) => {
      try {
        const result = await studentsAPI.get(
          `/groups/${groupId ? `${groupId}` : 'all'}`
        );
        return result.data.students;
      } catch (err) {
        dispatchError(
          'There is a problem, with connection to our service. Please report a problem.'
        );
      }
    },
    [dispatchError]
  );

  const getStudentById = useCallback(
    async (studentId) => {
      try {
        const result = await studentsAPI.get(`/students/${studentId}`);

        return result.data.students;
      } catch (err) {
        dispatchError(
          'There is a problem, with connection to our service. Please report a problem.'
        );
      }
    },
    [dispatchError]
  );

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (err) {
      dispatchError(
        'There is a problem, with connection to our service. Please report a problem.'
      );
    }
  };

  return { getStudentsByGroup, getStudentById, getGroups, findStudents };
};
