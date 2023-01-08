db.createUser(
    {
        user: "miminlearning",
        pwd: "learning!123",
        roles: [
            {
                role: "userAdmin",
                db: "flipped"
            }
        ]
    }
);