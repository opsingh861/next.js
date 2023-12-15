
export default function User() {
    return (
        <div>
            <h1 >Generating meta data</h1>
        </div>
    )
}

export function generateMetadata() {
    return {
        title: 'User page',
        description: 'This is the user page',
    }
  }