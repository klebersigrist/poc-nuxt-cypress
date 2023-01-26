import catFact from '../../fixtures/catfact.json';

const routes = [
  {
    id: 'get-catfacts',
    url: '/fact',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: catFact
        }
      },
      {
        id: 'error',
        type: 'status',
        options: {
          status: 500,
        },
      },
    ]
  }
];

export default routes;
