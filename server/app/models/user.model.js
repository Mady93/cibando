module.exports = mongoose => {
    const Users = mongoose.model(
      "users",
      mongoose.Schema(
        {
          nome: String,
          email: String,
          password: String,
          role: String
        },
        { timestamps: true }
      )
    );
    return Users;
  };

