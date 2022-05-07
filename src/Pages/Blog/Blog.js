import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 container pt-5'>
            <div className="row row-cols-1 row-cols-md-2 g-4 ">
                <div className="col">
                    <div className="card h-100 shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title my-3">Question no:1</h5>
                            <h5 className="card-title fw-bold my-3">What are the difference between javascript vs node.js?</h5>
                            <p className="card-text"><span className='text-info fw-bold fs-5'>Node.js:</span>
                                <br />
                                Node.js, a Javascript runtime environment allows javascript to be run on the server side.Allows javascript code to run outside the browser.Does not have capability to add HTML tags.Nodejs modules are express.Node js mostly used in web development.Nodejs is written in C, C++ and Javascript. <br />
                                <br />
                                <span className='text-info fw-bold fs-5'>Javascript:</span>
                                <br />
                                Javascript is used for writing scripts on the website ,called scripting language.Also said js is the updated version of ECMA script uses Chrome's V8 engine written in C++.javascript frameworks are TypedJS.It is basically used on the client-side.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title my-3">Question no:2</h5>
                            <h5 className="card-title fw-bold my-3">When should you use node.js and when mongodb?
                            </h5>
                            <p className="card-text">
                                <span className='text-info fw-bold fs-5'>Use of node.js:</span>
                                <br />
                                Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...
                                So, as I learnt basic javascript language it is easy for me to use and explore node.js.
                                <br />
                                <br />
                                <span className='text-info fw-bold fs-5'>Use of mongodb:</span>
                                <br />
                                If my application needs the ability to persistently store data in a way that I can efficiently query or update it later, then I would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases.As a beginner it is easy for me to understand database and work efficiently as it is a noSql database.SQL databases are little bit difficult for fresher .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title my-3">Question no:3</h5>
                            <h5 className="card-title fw-bold my-3">What are the difference between SQL and noSQL?</h5>
                            <p className="card-text">
                                <span className='text-info fw-bold fs-5'>SQL vs noSQL:</span>
                                <br />
                                SQL databases are primarily called as Relational Databases (RDBMS), whereas NoSQL database are primarily called as non-relational or distributed database.
                                SQL is the programming language used to interface with relational databases.Relational databases model records data as in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title my-3">Question no:4</h5>
                            <h5 className="card-title fw-bold my-3">What are the purpose of jwt and How does it works?</h5>
                            <p className="card-text">
                                <span className='text-info fw-bold fs-5'>Purpose of jwt:</span>
                                <br />
                                A JWT ,verify the owner of some JSON data. It's an encoded, URL-safe string that can contain an unlimited amount of data (unlike a cookie) and is cryptographically signed.
                                <br />
                                <br />
                                <span className='text-info fw-bold fs-5'> Works of jwt:</span>
                                <br />
                                <img className='w-50 mt-2 mb-2' src="https://www.vaadata.com/blog/wp-content/uploads/2016/12/JWT_tokens_EN.png" alt="" />
                                <p>jwt (jsonwebtoken) is used for secure website by generating secret key on the server side and match the key then permit to access the user.</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;