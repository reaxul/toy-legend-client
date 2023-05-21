
const BlogPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          What is an access token and refresh token?
        </h2>
        <p>
          An access token is a credential used to authenticate and authorize
          requests to access protected resources in a system. It is typically
          short-lived and issued by an authentication server upon successful
          authentication. Refresh tokens, on the other hand, are long-lived
          tokens used to obtain a new access token without needing to
          reauthenticate the user. They are used to maintain continuous access
          to protected resources even after the access token expires.
        </p>
        <p>
          Access tokens are usually stored in the client-side, either in memory
          or in a secure HTTP-only cookie, while refresh tokens should be stored
          securely on the server-side to prevent unauthorized access.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          Compare SQL and NoSQL databases
        </h2>
        <p>
          SQL (Structured Query Language) databases are relational databases
          that store data in structured tables with predefined schemas. They use
          SQL for querying and manipulating data and provide ACID (Atomicity,
          Consistency, Isolation, Durability) properties. Examples of SQL
          databases include MySQL, PostgreSQL, and Oracle.
        </p>
        <p>
          NoSQL (Not Only SQL) databases, on the other hand, are non-relational
          databases that store data in various formats, such as key-value pairs,
          documents, column families, or graphs. They provide high scalability
          and flexibility but sacrifice some of the consistency guarantees
          provided by SQL databases. Examples of NoSQL databases include
          MongoDB, Cassandra, and Redis.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          What is Express.js? What is Nest.js?
        </h2>
        <p>
          Express.js is a popular minimalistic web application framework for
          Node.js. It provides a simple and flexible way to build web
          applications and APIs. With Express.js, you can handle HTTP requests
          and responses, define routes, implement middleware, and interact with
          databases and other services.
        </p>
        <p>
          Nest.js, on the other hand, is a progressive Node.js framework for
          building efficient, scalable, and maintainable server-side
          applications. It is built with TypeScript and takes advantage of
          object-oriented programming principles. Nest.js provides a modular
          architecture and incorporates features from popular frameworks like
          Express.js, making it a powerful and developer-friendly choice for
          building backend applications.
        </p>
        <p>
          You can learn more about Nest.js by visiting their official website:{" "}
          <a href="https://nestjs.com">https://nestjs.com</a>.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          What is MongoDB aggregate and how does it work?
        </h2>
        <p>
          MongoDB's aggregate is a powerful pipeline-based framework for
          performing advanced data aggregation and transformation operations on
          the data stored in MongoDB. It allows you to process and manipulate data using a series of stages in the aggregation pipeline.
        </p>
      </div>
    </div>
  );
};
export default BlogPage;