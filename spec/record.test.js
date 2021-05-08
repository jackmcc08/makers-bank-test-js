const Record = require('../lib/record')
const MockDate = require('mockdate')

describe('Record', () => {
  beforeEach(() => {
    MockDate.set(new Date())

    const create_test_record = () => {
      const amount = 1000;
      const type = "deposit";
      const balance = 1000;
      return test_record = new Record(amount, type, balance)
    }

    return create_test_record()
  })

  describe('#new', () => {
    test('creates a record object with the appropriate input', () => {
      expect(test_record).toBeInstanceOf(Record);
      expect(test_record.amount).toBe(1000);
      expect(test_record.type).toBe("deposit");
      expect(test_record.balance).toBe(1000);
      expect(test_record.timestamp).toEqual(new Date());
    });
  })
})
