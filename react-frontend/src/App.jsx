import Card from './ui/card.jsx';
import Counter from './ui/Counter.jsx';
import Form from './ui/Form.jsx';
import List from './ui/List.jsx';

export default function App() {
    return (
        <main className="app-shell">
            <Card name="Ortiguerras" 
            
            description="This is me." />
            <Card name="Kate Valerie" 

            description="This is me again." />
            <Form />
            <Counter />
            <List />
        </main>
    );
}
