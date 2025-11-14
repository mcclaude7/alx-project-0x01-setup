import { UserProps } from "../../interfaces";

const UserCard: React.FC <UserProps> = ({id, name, username, email, address, phone, website, company}) =>{
    return(
        <div className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">@{username}</p>

      <div className="mt-4">
        <p><span className="font-medium">Email:</span> {email}</p>
        <p><span className="font-medium">Phone:</span> {phone}</p>
        <p><span className="font-medium">Website:</span> {website}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Address</h3>
        <p>{address.street}, {address.city}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Company</h3>
        <p className="text-gray-700">{company.name}</p>
        <p className="text-sm text-gray-500">{company.catchPhrase}</p>
      </div>
    </div>
    );
};

export default UserCard;
