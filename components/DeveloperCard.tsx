"use client";

import FollowButton from "@/components/FollowButton";
import { Avatar, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

export default function DeveloperCard() {
  return (
    <div className="flex w-full items-start justify-center mt-12">
      <Card className="mt-10 w-[400px]">
        <CardHeader className="relative flex h-[100px] flex-col justify-end overflow-visible bg-gradient-to-br from-indigo-300 via-Cyan-300 to-blue-400">
          <Avatar className="h-20 w-20 translate-y-12" src="/avatar.jpg" />
        </CardHeader>
        <CardBody>
          <div className="pb-4 pt-6">
            <p className="text-large font-medium">weijunext/程普</p>
            <p className="max-w-[90%] text-small text-default-400">
              @weijunext
            </p>
            <div className="flex gap-2 pb-1 pt-2">
              <Chip variant="flat">👨‍💻frontend</Chip>
              <Chip variant="flat">🛠️fullstAck</Chip>
              <Chip variant="flat">✨AI</Chip>
              <Chip variant="flat">⛵️fonts</Chip>
            </div>
            <p className="py-2 text-small text-foreground">
              Hscii fonts keypAd transliterator 8fiNger mAThs
            </p>
            <div className="w-full text-center mt-4 flex justify-evenly">
              <FollowButton name="x.com/etphor" href="https://x.com/etphor/" ></FollowButton>
              <FollowButton name="gitHub" href="https://github.com/zava8/" ></FollowButton>
              <FollowButton name="fb.com/ztrabc" href="https://fb.com/ztrabc" ></FollowButton>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
