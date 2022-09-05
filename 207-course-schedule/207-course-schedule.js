/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (!prerequisites.length) return true;

  const degree = new Array(numCourses).fill(0);
  const graph = {};
  const queue = [];

  for (const [a, b] of prerequisites) {
    graph[b] ? graph[b].push(a) : (graph[b] = [a]);
    degree[a]++;
  }

  degree.forEach((e, i) => !e && queue.push(i));

  while (queue.length) {
    const e = queue.shift();
    const courses = graph[e];
    for (let i = 0; i < courses?.length; i++)
      if (--degree[courses[i]] === 0) queue.push(courses[i]);
  }

  return degree.every((e) => !e);
};
