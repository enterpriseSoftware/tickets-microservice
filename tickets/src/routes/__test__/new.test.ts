import request from 'supertest';
import { app } from '../../app';

it('has a route handler listening to /api/tickets for post requests',
async () => {
    const response = await request(app)
    .post('/api/tickets')
    .send({});
    console.log('status: ', response.status);
    expect(response.status).not.toEqual(404);
});

it('can only be accessed by an authenticated user',
async () => {
    const response = await request(app)
    .post('/api/tickets')
    .send({})    
    console.log('status: ', response.status);    
    expect(response.status).toEqual(401);      
    
    
});

it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
    .post('/api/tickets').send({})
    .set('Cookie', global.signin())

    console.log('status: ', response.status);
    expect(response.status).not.toEqual(401);
    

});

it('returns an error if an invalid title is provided',
async () => {

});

it('returns an error in an invalid price is provided',
async () => {

});

it('it creates a new ticket with valid inputs',
async () => {

});