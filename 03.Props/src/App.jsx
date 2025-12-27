import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div className="parent">
        <Card
          user="Ankit Ahir"
          age={25}
          img="https://images.unsplash.com/photo-1766637837127-259227573559?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
        />
        <Card
          user="John Doe"
          age={30}
          img="https://images.unsplash.com/photo-1766570764539-297a1cd82956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          user="Jane Smith"
          age={28}
          img="https://images.unsplash.com/photo-1766543497004-2fd76e88f605?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  );
};

export default App;
