import request from 'supertest';
import {app } from '../../app';

it('it fails when an email that doesnt exist is supplied', async () => {
    return request(app)
    .post('/api/users/signin')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(400);
});

it('it fails when an email that doesnt exist is supplied', async () => {
    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(201);

    await request(app)
    .post('/api/users/signin')
    .send({
        email: 'test@test.com',
        password: 'wrongPassword'
    })
    .expect(400);    
});

it('it responds with a cookie with valid credentials', async () => {
    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signin')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(200);    
    expect(response.get('set-cookie')).toBeDefined();
});

