module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      'Notes',
      [
        {
          id: 1,
          title: 'teste',
          description: 'somente teste manito, somente teste',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('Notes', null, [
      {
        id: 1,
        title: 'teste',
        description: 'somente teste manito, somente teste',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  }
};
