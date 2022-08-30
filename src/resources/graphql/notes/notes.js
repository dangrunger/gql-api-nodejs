const query = {
    Query: {
        getReportedViewByRoomId: async (parent,{ input }, { database },info) => {
            const findRoomId = await database.Notes.findAll();
            return findRoomId;
        },
    },

    Mutation: {
        createReportedView: async (parent, { input }, { database }, info) => {
            const findUserId = await database.user_profile.findByPk(input.userId);
            if (findUserId) {
                const reportedViewFromDb = await database.report_views.create({
                    presentListView: input.presentListView,
                    voteReportedView: input.voteReportedView,
                    roomId: input.roomId,
                    userId: input.userId,
                });
                return reportedViewFromDb;
            } else {
                throw new Error("Perfil usuario não existe!");
            }
        },
    },
};
export default query;
