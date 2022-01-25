const loopTerminals = require('./loopTerminals')

describe('loopTerminals', () => {
    it('return true if termianl name is null', () => {
      const actual = loopTerminals([ 
    {
        "name": "1234",
        "label": null,
        "status": "OnlineToday",
       
    },
    {
        "name": "5678",
        "status": "OnlineToday",
    },
    {
        "name": null,
        "status": "OnlineToday",
    },
    {
        "name": "",
        "status": "OnlineToday",
    },
    ]);
      const expected = true;
      expect(actual).toEqual(expected);
    });

    it('return false if termianl name is not null', () => {
        const actual = loopTerminals([ 
      {
          "name": "1234",
          "label": null,
          "status": "OnlineToday",
         
      },
      {
          "name": "5678",
          "status": "OnlineToday",
      },
      ]);
        const expected = false;
        expect(actual).toEqual(expected);
      });
  });