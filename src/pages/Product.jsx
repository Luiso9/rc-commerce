import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Image, Skeleton } from "@nextui-org/react";
import NavigationBar from '../component/NavigationBar';

const ProductCard = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://dummyjson.com',
      url: '/products/category/groceries',
    })
      .then(({ data }) => {
        setProducts(data.products);
      })
      .catch(err => {
        setError('Kesalahan dalam mengambil data.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading) {
    return (
      <Card className="w-[200px] space-y-5 p-4" radius="2xl">
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>
    );
  }

  return (
    <>
      <NavigationBar />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 m-4">
        {products.map(product => (
          <Card
            color="foreground"
            shadow="sm"
            key={product.id}
            isPressable
            onPress={() => console.log("item pressed")}
            className="transition duration-400 hover:scale-105"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                radius="lg"
                width="100%"
                alt={product.title}
                className="w-full object-contain h-[140px]"
                src={product.images[1]}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className="truncate">{product.title}</b>
              <p className="text-default-500 font-bold">${product.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
