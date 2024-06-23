import {rest} from 'msw';

export const handlers = [
  rest.get('https://fakerapi.it/api/v1/users', (req, res, ctx) => {
    return res(
      ctx.json({
        status: 'OK',
        code: 200,
        total: 10,
        data: [
          {
            id: 1,
            uuid: 'd8defa21-4a53-3244-8327-eff91df7e0d3',
            firstname: 'Joanne',
            lastname: 'Flatley',
            username: 'schmeler.nash',
            password: 'yg,JbY0(',
            email: 'dandre68@vandervort.biz',
            ip: '189.228.37.61',
            macAddress: '27:A5:DD:6B:8A:B6',
            website: 'http://carter.info',
            image: 'http://placeimg.com/640/480/people',
          },
          {
            id: 2,
            uuid: 'b1973bee-e76a-3ea2-90c7-0f0aff477f0f',
            firstname: 'Lucius',
            lastname: 'Lakin',
            username: 'jfeeney',
            password: 'z|I1{(8>N^@\\Jg})',
            email: 'sfahey@daniel.com',
            ip: '161.125.28.86',
            macAddress: 'D3:72:8D:44:F8:92',
            website: 'http://maggio.com',
            image: 'http://placeimg.com/640/480/people',
          },
        ],
      }),
    );
  }),
];
