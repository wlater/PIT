import { useEffect } from "react";
import { DiscussionModel } from "../../../models/DiscussionModel";
import { admin_controller_endpoints } from "../../apiEndpointsUrlsList";

export const useFetchOpenDiscussions = (authentication: { isAuthenticated: boolean; token: string; },
                                        setDiscussions: React.Dispatch<React.SetStateAction<DiscussionModel[]>>,
                                        setTotalAmountOfDiscussions: React.Dispatch<React.SetStateAction<number>>,
                                        setTotlalPages: React.Dispatch<React.SetStateAction<number>>,
                                        setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
                                        setHttpError: React.Dispatch<React.SetStateAction<string | null>>,
                                        currentPage: number,
                                        isDiscussionClosed: boolean) => {

    useEffect(

        () => {

            const fetchOpenDiscussions = async () => {

                setIsLoading(true);

                if (authentication.isAuthenticated) {

                    const urlParams = `?page=${currentPage - 1}&discussions-per-page=5`;

                    const endpoint = admin_controller_endpoints.get_open_discussions;

                    const url = endpoint.url + urlParams;

                    const requestOptions = {

                        method: endpoint.method,
                        headers: {
                            Authorization: `Bearer ${authentication.token}`,
                            "Content-type": "application/json"
                        }
                    };

                    const response = await fetch(url, requestOptions);

                    const responseJson = await response.json();

                    if (!response.ok) {
                        throw new Error(responseJson.message ? responseJson.message : "Oops, something went wrong!");
                    }

                    setTotalAmountOfDiscussions(responseJson.totalElements);
                    setTotlalPages(responseJson.totalPages);

                    const responseDiscussionsContentArray = responseJson.content;

                    const loadedDiscussions: DiscussionModel[] = [];

                    for (const key in responseDiscussionsContentArray) {

                        loadedDiscussions.push(responseDiscussionsContentArray[key]);
                    }

                    setDiscussions(loadedDiscussions);
                };

                setIsLoading(false);
            };

            fetchOpenDiscussions().catch(

                (error: any) => {

                    setIsLoading(false);
                    setHttpError(error.message);
                }
            )

        }, [currentPage, isDiscussionClosed]

    );

}