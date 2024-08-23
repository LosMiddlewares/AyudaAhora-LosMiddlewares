import { sequelize } from '../db/configDB.js';
import { Users } from '../models/users.js';
import { Post } from '../models/post.js';
import { Donation } from '../models/donation.js';
import { DonationHistory } from '../models/donationHistory.js';
import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

export const createRandomData = async () => {
  try {
    // Sincroniza los modelos
    await sequelize.sync({ force: true });

    // Crea 1000 usuarios aleatorios usando bcrypt para las contraseñas
    const users = [];
    for (let i = 0; i < 1000; i++) {
      const passwordHash = await bcrypt.hash(faker.internet.password(), 10);
      
      const user = await Users.create({
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        password: passwordHash,
        fecha_nac: faker.date.birthdate({ min: 18, max: 60, mode: 'age' }),
        profile_pic: faker.image.avatar()
      });
      users.push(user);
    }

    // Crea 100 publicaciones aleatorias
    const posts = [];
    for (let i = 0; i < 100; i++) {
      const user = users[Math.floor(Math.random() * users.length)];
      const post = await Post.create({
        user_id: user.id,
        title: faker.lorem.words(5),
        description: faker.lorem.paragraph(),
        goal_amount: faker.finance.amount(100, 1000, 2),
        current_amount: 0 // Inicialmente no tiene donaciones
      });
      posts.push(post);
    }

    // Crea 500 donaciones aleatorias
    const donations = [];
    for (let i = 0; i < 500; i++) {
      const donor = users[Math.floor(Math.random() * users.length)];
      const post = posts[Math.floor(Math.random() * posts.length)];
      const amount = faker.finance.amount(10, 200, 2);
      
      const donation = await Donation.create({
        donor_id: donor.id,
        post_id: post.id,
        amount: amount
      });

      // Actualiza el monto acumulado en la publicación
      post.current_amount += parseFloat(amount);
      await post.save();

      donations.push(donation);

      // Crea historial de donación
      await DonationHistory.create({
        donation_id: donation.id,
        type: 'donated'
      });

      // Crea historial de recepción
      await DonationHistory.create({
        donation_id: donation.id,
        type: 'received'
      });
    }

    console.log('Datos aleatorios generados con éxito');
  } catch (error) {
    console.error('Error al generar los datos:', error);
  } finally {
    await sequelize.close();
  }
};