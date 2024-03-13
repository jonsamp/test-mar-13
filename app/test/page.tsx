import { TestComponent } from "../components/TestComponent";

export default function TestPage() {
  console.log('🌈 test page') // appears in the server logs
  return <div>tests page <TestComponent /></div>;
}