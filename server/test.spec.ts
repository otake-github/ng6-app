
describe('test', () => {
    describe('regex', () => {
        // const match = /([BDFGＢＤＦＧ][\d０-９]{4,6})/ig.exec(
        //     ',D123456,F１２３４,G１２３４５６、Ｂ1234,Ｄ123456,Ｆ１２３４,Ｇ１２３４５６、b1234,d123456,f１２３４,g１２３４５６、ｂ1234,ｄ123456,ｆ１２３４,ｇ１２３４５６,B1234');
        const values = [
            '01:,B1234',
            '02,D123456',
            '03:,F１２３４',
            '04:,G１２３４５６',
            '05:、Ｂ1234',
            '06:,Ｄ123456',
            '07:,Ｆ１２３４',
            '08:,Ｇ１２３４５６',
            '09:、b1234',
            '10:,d123456',
            '11:,f１２３４',
            '12:,g１２３４５６',
            '13:、ｂ1234',
            '14:,ｄ123456',
            '15:,ｆ１２３４',
            '16:,ｇ１２３４５６',
            '17:,ｇ１２３４５',
        ];

        const value = values.join('');
        console.log('value=%s', value);
        const match = value.match(/([BDFGＢＤＦＧ][\d０-９]{4,6})/ig);
        console.log('match=%o', match);

        it('match.length', () => {
            expect(match.length).toBe(17, 'match.length');
        });

        it('match[16]', () => {
            expect(match[16]).toBe('ｇ１２３４５', 'match[16]');
        });

        it('match[16].length', () => {
            expect(match[16].length).toBe(6, 'match[16].length');
        });


        const filter_5_7 = match.filter(s => s.length === 5 || s.length === 7);
        console.log('filter_5_7=%s', filter_5_7);

        it('filter_5_7.length', () => {
            expect(filter_5_7.length).toBe(16, 'filter_5_7.length');
        });

        it('filter_5_7[15]', () => {
            expect(filter_5_7[15]).toBe('ｇ１２３４５６', 'filter_5_7[15]');
        });

        it('filter_5_7[15].length', () => {
            expect(filter_5_7[15].length).toBe(7, 'filter_5_7[15].length');
        });

    });
});

