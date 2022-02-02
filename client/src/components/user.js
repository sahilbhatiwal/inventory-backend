export default function User(props) {
    const {user = {
        name:"test",
        phone: "test",
    }}= props;
    return (
      <div className="user my-3 bg-danger">
        <h1 className="name">{user.name}</h1>
        <h2 className="phone">{user.phone}</h2>
      </div>
    );
}
