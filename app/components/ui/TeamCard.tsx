"use client";

import { TeamMember } from "@/app/data/teamData";
import Image from "next/image";


interface Props {
    member: TeamMember;
}

export default function TeamCard({ member }: Props) {
    return (
        <div className="rounded-xl border bg-white dark:bg-gray-800 p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-gray-200">
                <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover"
                />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {member.name}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.role}
            </p>
        </div>
    );
}
