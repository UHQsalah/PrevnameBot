module.exports = async (client, db, config, oldUser, newUser) => {
    if (oldUser.username !== newUser.username) {
        db.set(`prevname_${oldUser.id}_${parseInt(new Date() / 1000)}_${newUser.username}`, true);
        console.log(`${oldUser.username} => ${newUser.username}`);
    }
};
