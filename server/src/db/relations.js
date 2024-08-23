import { Users } from "../models/Users.js";
import { Post } from "../models/post.js";
import { Donation } from "../models/donation.js";
import { DonationHistory } from "../models/donationHistory.js";


export const relations = () => {
    // Relaciones
    Users.hasMany(Post, { 
        foreignKey: 'user_id',
        sourceKey: 'id',
    });
    Post.belongsTo(Users, { 
        foreignKey: 'user_id',
        targetKey: 'id', 
    });

    Users.hasMany(Donation, { 
        foreignKey: 'donor_id',
        sourceKey: 'id', 
    });
    Donation.belongsTo(Users, { 
        foreignKey: 'donor_id',
        targetKey: 'id', 
    });

    Post.hasMany(Donation, { 
        foreignKey: 'post_id',
        sourceKey: 'id', 
    });
    Donation.belongsTo(Post, { 
        foreignKey: 'post_id',
        targetKey: 'id', 
    });

    Donation.hasMany(DonationHistory, { 
        foreignKey: 'donation_id',
        sourceKey: 'id', 
    });
    DonationHistory.belongsTo(Donation, { 
        foreignKey: 'donation_id',
        targetKey: 'id',
    });
};