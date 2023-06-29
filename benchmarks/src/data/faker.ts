import { faker } from '@faker-js/faker'

faker.seed(42)

export function createFakeUser(length: number) {
  return Array.from({ length }, () => ({
    id: faker.string.uuid(),
    linkedin: null,
    picture: faker.internet.avatar(),
    isActive: faker.datatype.boolean(),
    name: faker.person.fullName(),
    company: faker.company.name(),
    balance: faker.commerce.price({ min: 100, max: 1000000 }),
    age: faker.helpers.rangeToNumber({ min: 18, max: 70 }),
    title: faker.person.jobTitle(),
    birthdate: faker.date.birthdate(),
    clients: Array.from({ length: faker.helpers.rangeToNumber({ min: 0, max: 100 }) }, () => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName()
    }))
  }))
}
