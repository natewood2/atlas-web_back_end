import { expect } from 'chai';
import kue from 'kue';
import createPushNotificationsJobs from './8-job.js';

describe('createPushNotificationsJobs', () => {
    const queue = kue.createQueue();
    const list = [
        {
            phoneNumber: '4153518780',
            message: 'This is the code 1234 to verify your account'
        }
    ];

    before(() => {
        queue.testMode.enter();
    });

    afterEach(() => {
        queue.testMode.clear();
    });

    after(() => {
        queue.testMode.exit();
    });

    it('should display a error if not array', () => {
        expect(() => createPushNotificationsJobs('not an array', queue)).to.throw('Jobs is not an array');
    });

    it('should add 2 job to queue', () => {
        createPushNotificationsJobs(list, queue);
        expect(queue.testMode.jobs.length).to.equal(1);
        expect(queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
        expect(queue.testMode.jobs[0].data).to.equal(list[0]);
    });
});